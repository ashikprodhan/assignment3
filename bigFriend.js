var friends = ['salahuddin', 'kamaruzzaman', 'ali', '', 'robin', 'saniur'];
function bigFriends(arr) {
    if (friends[i] == '') {
        return 'not valid';
    }


    var bigLength = 0;
    var index = 0;
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > bigLength) {
            bigLength = friends[i].length;
            index = friends[i];


        }
    }
}


