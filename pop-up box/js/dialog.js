class Dialog{
    constructor(title = '我是一个标题', content,btn){
        // es6的写法
        this.title = title;
        // es5的写法
        this.content = content || '今天是开课的第一天';

        this.btn = btn || ['确认','取消']

        this.init();
        
    }
    init(){
        this.createWrap();
    }
    // 大盒子
    createWrap(){
        let Odiv = document.createElement('div');
        let head = this.createHeader();
        let section = this.createSection();
        
        Odiv.append(head);
        Odiv.append(section);

        Odiv.className = 'wrap';
        document.body.append(Odiv);

        this.add();
    }
    // 标题
    createHeader(){
        let header = document.createElement('div');
        header.className = 'header';
        header.innerHTML=this.title;
        // X
        let span = document. createElement('span');
        span.className = 'Ospan';
        span.innerHTML = 'X';
        header.append(span);

        return header;
    }
    // 内容
    createSection(){
        let section = document.createElement('div');
        section.className = 'section';
        section.innerHTML = this.content;

        // 按钮
        let btn1 = document.createElement('button');
        btn1.className = 'left';
        btn1.innerHTML = this.btn[0];

        let btn2 = document.createElement('button');
        btn2.className = 'right';
        btn2.innerHTML = this.btn[1];

        section.append(btn1);
        section.append(btn2);
        return section;
    }
    // 隐藏
    hide(){
        // 获取到大盒子
        let wrap = document.querySelectorAll('.wrap')[0];
        wrap.style.display = 'none';
    }
    // 点击事件
    add(){
        let span = document.querySelectorAll('.Ospan')[0];
        span.addEventListener('click', (event)=>{
            this.hide();
        })

        let right = document.querySelectorAll('.right')[0];
        right.addEventListener('click', (event)=>{
            this.hide();
        })

        let left = document.querySelectorAll('.left')[0];
        left.addEventListener('click', (event)=>{
            this.hide();
        })
    }
}
new Dialog()