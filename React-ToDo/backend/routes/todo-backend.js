var express = require("express");
var aws = require("aws-sdk")

aws.config.update({
    region: "ap-northeast-2",
    endpoint: "http://localhost:8000"
});

let dynamoDb = new aws.DynamoDB();

const tableName = "TodoHistory";

function tryCreateTable(tableName) {
    dynamoDb.listTables((err, data) => {
        if(err) {
            console.error("listTables error");
        } else {
            if(data.TableNames.includes(tableName))
            {
                console.log("tables: ", data.TableNames);
                return;
            }

            createTableTodoHistory(tableName);
        }
    });
}

function createTableTodoHistory(tableName) {
    let params = {
        TableName: "TodoHistory", 
        KeySchema: [
            { AttributeName: "UserId", KeyType: "HASH" },
            { AttributeName: "TodoId", KeyType: "RANGE" }
        ],
        AttributeDefinitions: [
            { AttributeName: "UserId", AttributeType: "S" },
            { AttributeName: "TodoId", AttributeType: "N" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1, 
            WriteCapacityUnits: 1
        }
    };
    
    dynamoDb.createTable(params, (err, data) => {
        if(err) {
            console.error("createTable error: ", JSON.stringify(err, null, 2));
        } else {
            console.log("table created: ", createTable.TableName);
        }
    });    
}

function resetTable(tablenName) {
    const params = {
        TableName: tableName
    };
    dynamoDb.deleteTable(params, (err, data) => {
        if(err) {
            console.log("error deleteTable", err);
        }
    });
}

function readTodos(userId) {
    const params = {
        TableName = tableName,
        Key: {
            'UserId': userId
        }
    };

    dynamoDb.getItem(params, (err, data) => {
        if(err) {
            console.error("readTodos: ", JSON.stringify(err, null, 2));
        } else {
            //TODO: hand over todo list
        }
    });
}

function insertTodoItem(insertParams) {
    dynamoDb.putItem(insertParams, (err, data) => {
        if(err) {
            console.log("insertTodoItem error: ", err);
            throw err;
        } else {
            console.log("insertTodoItem: ", data)
        }
    });
}

//resetTable("TodoHistory");
tryCreateTable(tableName);

let router = express.Router();

router.get("/", (req, res, next) => {
    const userId = req.body.userId;

});

router.post("/", (req, res, next) => {
    const todo = req.body.todo;
    const userId = req.body.userId;

    const insertParams = {
        TableName = tableName, 
        Item: {
            'UserId': {S: userId},
            'TodoId': {N: todo.todoId},
            'TodoText': {S: todo.text},
            'Completed': {N: todo.isCompleted}
        }
    };
    insertTodoItem(insertParams);

    res.sendStatus(200);
});

module.exports = router;