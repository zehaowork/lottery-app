import React, {useState,useEffect} from 'react'
import Ball from '../ball/ball'
import './game.css';
import trashIcon from '../../images/trash.png'
import checkmarkIcon from '../../images/checkmark.png'
import {factorialize} from '../../utils/util.js'

/*数字彩票的定义：
数字彩票可以分为，单区  e.g 33 选 6 或 双区 (前区以及后区) e.g 33 选 6 + 15 选1
每个区域可以设置 min 和 max，分别代表 最小组合的数字数量，以及可选的数字数量上限 (用于复式投注的上限)

*/
function Game(props){
    const [front, setFront] = useState([]);
   const [numSelectedFront, setNumSelectedFront] = useState(0);
   const [numSelectedBack, setNumSelectedBack] = useState(0);
   const [back, setBack] = useState(null);
  const [numBet, setNumBet] = useState(0);

//挂载时触发，将每个数字 转化成 一个 对象列表  e.g[{num:1,isSelected:false}]
  useEffect(() => {
    transformAreaToList(props.game.front,true);
    transformAreaToList(props.game.back,false);
}, [])
    

   //当选中的号码数量发生改变时触发
    useEffect(() => {
        calculateNumBets();
    }, [numSelectedBack, numSelectedFront])

  

  //计算复式投注，其实就是各种不重复数字的组合。
  // formula : n!/k!(n-k)!
  // n = 已经选中的号码
  // k = 游戏定义的最少数量组合
   const calculateNumBets = ()=>{
       let frontNum = 0;
       let backNum = 0;
        console.log(numSelectedFront)
        // 捕捉单区数字彩时出现的 back 是 undefined的错误
        try{
            if(  numSelectedFront<props.game.front.min || numSelectedBack<props.game.back.min){
                setNumBet(0);
                return;
            }
            else{
                frontNum = factorialize(numSelectedFront)/(factorialize(props.game.front.min)*factorialize((numSelectedFront-props.game.front.min)))
                backNum = factorialize(numSelectedBack)/(factorialize(props.game.back.min)*factorialize((numSelectedBack-props.game.back.min)))
                setNumBet(frontNum*backNum)
            }
        }
        catch(e){
            if(numSelectedFront<props.game.front.min){
                setNumBet(0);
                return;
            }
            else{
                frontNum = factorialize(numSelectedFront)/(factorialize(props.game.front.min)*factorialize((numSelectedFront-props.game.front.min)))
                setNumBet(frontNum)
            }
        }
   }


   // 点击数字时触发
    const handleClick = (isBack,num)=>{
       
        let area = isBack?[...back]:[...front];
        let item = {...area[num-1]};
        item.isSelected = ! item.isSelected;
        // 查看是否区域已达到上限
        if((isBack) && (numSelectedBack>=props.game.back.max) && item.isSelected === true ){
            alert('您已选择的号码数量已经达到上限.'+"（"+numSelectedBack+"）");
            return;
        }
        if((!isBack) && (numSelectedFront>=props.game.front.max) && item.isSelected === true ){
            alert('您已选择的号码数量已经达到上限.'+"（"+numSelectedFront+"）");
            return;
        }

        
        area[num-1] = item;
       
        if(isBack){
            setBack(area);
           if(item.isSelected === true){
            setNumSelectedBack(numSelectedBack+1);
           }
           else{
            setNumSelectedBack(numSelectedBack-1);
           }
        }
        else{
           
            setFront(area);
            if(item.isSelected === true){
                setNumSelectedFront(numSelectedFront+1);
            }
            else{
                setNumSelectedFront(numSelectedFront-1);
            }
            
        }
   
    }

    // 点击 Bin 图标时触发，重置当前state
    const handleClear = ()=>{
        transformAreaToList(props.game.front,true);
        transformAreaToList(props.game.back,false);
        setNumBet(0);
        setNumSelectedBack(0);
        setNumSelectedFront(0);
    }

   
    //将每个数字 转化成 一个 对象列表  e.g[{num:1,isSelected:false}]
    const transformAreaToList = (areaObj,isFront)=>{
        if(areaObj == null){
            return;
        }
        let num = 1;
        let list = [];
        while(num<= areaObj.maxNum){
            list.push({num:num,isSelected:false})
            num=num+1
        }
        if(isFront){
            setFront(list)
        }
        else{
            setBack(list);
        }
        
    }


  
  //数字彩号码渲染函数
    const renderBalls = (area,isBack)=>{
     
      let ballList = [];
      
      area.forEach(el=>{
          ballList.push(<Ball key={el.num} onClick={()=>{handleClick(isBack,el.num);}} isBack={isBack} isSelected={el.isSelected} num={el.num} />)
      })
     return ballList;
    }

    //提示渲染函数
    const guidanceNote =()=>{
        if(props.game.back === undefined){
            return "至少选择 "+props.game.front.min +" 个号码"
        }
        else{
            return "请至少在前区选择"+props.game.front.min +"个号码, 在后区选择 "+props.game.back.min +"个号码"
        }
    }

    return <React.Fragment>
         <div class='content' >
         <div class ='selection-area'>
        <div >{renderBalls(front,false)}
        </div>
       {back!= null&& <div >{renderBalls(back,true)}
        </div>}

    </div>
         </div>
    <footer class='footer' >
      <img onClick={()=>{handleClear();}} src={trashIcon} alt='清空' ></img>
      
     {numBet>0 && <div>一共{numBet}注,{numBet*props.game.price}元</div>}
     {numBet===0 && <div>{guidanceNote()}</div>}
      <img  src={checkmarkIcon} alt='确定' ></img>
    </footer>
    </React.Fragment>
       
    
}
export default Game;