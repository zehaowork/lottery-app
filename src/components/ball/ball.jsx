import './ball.css'

function Ball(props){
    // 加入 leading zero
    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    //根据选中状态，以及section来定义样式
    const transformClassName = ()=>{
        let classNameString = 'ball';
        if (props.isBack && props.isSelected){
            classNameString = classNameString +" back-ball back-active"
        }
        else if(props.isBack && !props.isSelected){
            classNameString = classNameString +" back-ball"
        }
        else if(!props.isBack && props.isSelected){
            classNameString = classNameString +" active"
        }
       return classNameString
    }

return <div onClick={props.onClick} class={transformClassName()} >
    <p>{pad(props.num,2)}</p>
</div>
}
export default Ball;