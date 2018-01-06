var selenium = require('selenium-webdriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;


describe('Prueba de Login', function() {

    beforeEach(function(done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        this.driver.get('https://socrates.salesup.com.mx/').then(done);
    },30000);

    afterEach(function(done) {
        console.log("Eliminando")
        this.driver.quit().then(done);
    });


    it('Ingresando al sistema con datos incorrectos', function(done) {
        var inputEmail = this.driver.findElement(selenium.By.id('InputEmail'));
        inputEmail.sendKeys('salesupsocratess@gmail.com');

        var inputPass = this.driver.findElement(selenium.By.id('InputPassword'));
        inputPass.sendKeys('Salesup2016!');


        this.driver.findElement(selenium.By.id('btnIngresar')).click();


        var frmEntrar = this.driver.findElement(selenium.By.id('frmEntrar'));
        frmEntrar.getText().then(function(val){
            console.log("Me regresa al login")
            expect(val).not.toBe('',"Me debe regresar al login");
            done();             
        }).catch(function(err){
            console.log("Me loguea")
            expect(err).not.toBe(undefined,"No debe encontrar el form de login");
            done()
        })
  
    });


    it('Ingresando al sistema con datos correctos', function(done) {
		var inputEmail = this.driver.findElement(selenium.By.id('InputEmail'));
		inputEmail.sendKeys('salesupsocrates@gmail.com');

		var inputPass = this.driver.findElement(selenium.By.id('InputPassword'));
		inputPass.sendKeys('Salesup2016!');


        this.driver.findElement(selenium.By.id('btnIngresar')).click();


        var frmEntrar = this.driver.findElement(selenium.By.id('frmEntrar'));
        frmEntrar.getText().then(function(val){
            console.log("Me regresa al login")
            expect(val).not.toBe('',"Me debe regresar al login");
            done();             
        }).catch(function(err){
            console.log("Me loguea")
            expect(err).not.toBe(undefined,"No debe encontrar el form de login");
            done()
        })
  
    });



});