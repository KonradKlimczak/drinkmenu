"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@drinkmenu.v5ol4.mongodb.net/?retryWrites=true&w=majority`;
const client = new mongodb_1.MongoClient(uri, {
    serverApi: mongodb_1.ServerApiVersion.v1,
});
const run = () => {
    client.connect((err) => __awaiter(void 0, void 0, void 0, function* () {
        const collection = client.db('drink-page').collection('cocktail');
        const coctail = yield collection.findOne({ name: 'Test' });
        console.log(coctail);
        client.close();
    }));
};
exports.run = run;
