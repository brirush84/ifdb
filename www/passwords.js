function onPasswordChange(fld)
{
    var p = fld.value;
    var len = p.length;
    var hasLower = p.match(/[a-z]/);
    var hasUpper = p.match(/[A-Z]/);
    var hasDigit = p.match(/[0-9]/);
    var hasOther = p.match(/[^a-zA-Z0-9]/);

    var strength;
    if (len >= 8 && hasLower && hasUpper && (hasDigit || hasOther))
        strength = ["Strong", "green", 5];
    else if ((len >= 6
              && (hasLower || hasUpper)
              && (hasDigit || hasOther || (hasLower && hasUpper)))
             || len >= 8)
        strength = ["Medium", "#ff8000", 4];
    else if ((len >= 4
              && (hasLower || hasUpper)
              && (hasDigit || hasOther || (hasLower && hasUpper)))
             || len >= 6)
        strength = ["Medium", "#ff8000", 3];
    else if (len >= 3)
        strength = ["Weak", "red", 2];
    else if (len >= 1)
        strength = ["Weak", "red", 1];
    else
        strength = ["Weak", "red", 0];

    document.getElementById("pswStrength").innerHTML =
        "<span style='background:" + strength[1] + ";border:1px solid "
        + strength[1] + ";'>"  + nbsp(strength[2]) + "</span>"
        + "<span style='border:1px solid " + strength[1] + "'>"
        + nbsp(5 - strength[2]) + "</span>"
        + "<span style='padding-left:1ex;color:" + strength[1] + "'>"
        + strength[0] + "</span> ";

    onPassConfChange(document.getElementById("password2"));
}
function nbsp(n)
{
    for (var s = "" ; n != 0 ; --n, s += "&nbsp;&nbsp;");
    return s;
}
function onPassConfChange(fld)
{
    var p1 = document.getElementById("password").value;
    var p2 = fld.value;
    document.getElementById("confMatch").innerHTML =
        (p1 == p2 ? "<span style='color:green;'>OK</span>"
                  : "<span style='color:red;'>No</span>");
}
onPasswordChange(document.getElementById("password"));
