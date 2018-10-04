import { expect } from "chai";
import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as httpStatus from "http-status";
import "mocha";
import app from "./app";

chai.use(chaiHttp);

describe("App - Get", () => {
    it("should return expected response", () => {
        return chai.request(app)
            .get("/")
            .then((res) => {
                expect(res.status).to.equal(httpStatus.OK);
                expect(res.body.message).to.equal("Hello World!");
            });
    });
});

describe("App - Post", () => {
    it("should return expected response", () => {
        return chai.request(app)
            .post("/")
            .send({message: "foo"})
            .then((res) => {
                expect(res.status).to.equal(httpStatus.CREATED);
                expect(res.body.message).to.equal("foo");
            });
    });
});
