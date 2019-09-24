pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    function Inbox(string initialMessae) public {
        message = initialMessae;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
