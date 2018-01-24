class Tab{
    constructor(){
        
        this.init();
    }
    init(){
        this.oul = document.getElementById('ul');
        this.lis = this.oul.getElementsByTagName('li');
        this.ool = document.getElementById('ol')
        this.oli = this.ool.getElementsByTagName('li');
        this.event();
    }
    event () {
        for(let i = 0; i < this.lis.length; i++) {
            this.lis[i].onclick = () => {
                this.paita(i);
            }
        }
    }
    paita (ind) {
        for(let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.oli[i].style.display = 'none';
        }
        this.lis[ind].className = 'active';
        this.oli[ind].style.display = 'block';
    }
}
new Tab();