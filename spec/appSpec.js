'use strict';
var request = require("request");
var appServer = require("../app/index.js")

var base_url = "http://localhost:3000/"

describe("Servidor Activo", function() {
  describe("GET /", function() {
    it("Devuelve un 200", function(done) {
      request.get(base_url, function(error, response, body) {
      	expect(error).toBe(null, "No debe haber error");
      	if (!error){
        	expect(response.statusCode).toBe(200);
        }
        done();
      });
    });

    it("Validar Servidor Activo", function(done) {
      request.get(base_url, function(error, response, body) {
      	expect(error).toBe(null, "No debe haber error");
      	if (!error){
	        expect(body).toBe("Servidor Activo");
	     }
	    appServer.closeServer();
        done();
      });
    });
  });
});