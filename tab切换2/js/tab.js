let tli = ['选项卡1','选项卡2','选项卡3','选项卡4'];
let cli = ['内容1','内容2','内容3','内容4'];
class Tab{
    constructor(tli,cli){
        this.tli = tli;
        this.cli = cli
        this.init()
    }
    init(){
        this.createTab();
        this.addEvent();
    }
    // 动态创建盒子
    createTab(){
        let tab = document.createElement('div');
        tab.className='tab';
        document.body.append(tab);

        let tit = this.createTit();
        tab.append(tit);
        let con = this.createCon();
        tab.append(con)
    }
    createTit(){
        let Oul = document.createElement('ul');
        Oul.className = 'oul'
        tli.map((item,index,arrs)=>{
            let Tli = document.createElement('li');
            Tli.innerHTML = item;
            Oul.append(Tli)
        })
        return Oul;
    }
    createCon(){
        let Ool = document.createElement('ol');
        Ool.className = 'ool'
        cli.map((item,index,arrs)=>{
            let Cli = document.createElement('li');
            Cli.innerHTML = item;
            Ool.append(Cli)
        })
        return Ool;
    }
    // 添加点击事件
    addEvent(){
        let tli = document.querySelectorAll('ul li');
        let cli = document.querySelectorAll('ol li');
        [...tli].map((item, index, arrs)=>{
            item.addEventListener('click',()=>{
                // 显示高亮
                [...arrs].map((item) => {
                    item.className = "";
                });
                item.className = 'on';
                // 切换内容
                [...cli].map((item, index) => {
                    item.style.display = "none";
                });
                cli[index].style.display = 'block';
            })
        })
    }
}
new Tab()