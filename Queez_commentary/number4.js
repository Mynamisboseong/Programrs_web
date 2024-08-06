function RockBand(members) {
    this.members = members;
    this.perform = fuction() {
        setTimeout(function() {
            this.members.forEach(function(member){
                member.perform();
            })
        },1000)
    }
}

var theOralCigrettes = new RockBand([
    {
        name: 'takuya',
        perform: function() {
            console.log('sing: a e u i a e u i')
        }
    }
]);

theOralCigarettes.perform();