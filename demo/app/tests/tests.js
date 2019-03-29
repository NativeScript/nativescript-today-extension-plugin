var TodayExtensionPlugin = require("nativescript-today-extension-plugin").TodayExtensionPlugin;
var todayExtensionPlugin = new TodayExtensionPlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(todayExtensionPlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(todayExtensionPlugin.greet()).toEqual("Hello, NS");
    });
});