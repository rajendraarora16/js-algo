/**
 * 
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * 
 */

let defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]');
};

let address = "1.1.1.1"
console.log(defangIPaddr(address));
