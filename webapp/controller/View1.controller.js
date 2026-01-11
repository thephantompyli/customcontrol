sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("customcontrol.controller.View1", {
        onInit() {
        },
        onAfterRendering(oEvent) {
			this.byId("rating").reset();
			a="";//trial revert
		},
        onRatingChange(oEvent) {
			const fValue = oEvent.getParameter("value");
			const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		}
    });
});