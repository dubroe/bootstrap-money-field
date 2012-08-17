bootstrap-money-field
==========

Convert an input field (type="text") into a textfield with a twitter bootstrap dollar sign add on.

Sample usage:

In your html:

    Delivery Charge <input type="text" class="money" name="delivery_charge" />
    Minimum Order Amount <input type="text" class="money" name="minimum_order_amount" />

In your javascript:

    var options = {
      width: 80 // The css width to be applied to the textfield
    };
    $('.money').money_field(options); // Or just $('.money').money_field();
    
Resulting fields look like this: https://dl.dropbox.com/s/acr15ichibhxbqa/money-field.PNG?dl=1&
    
