import {useState} from 'react'
import Tab from './components/tab/tab.jsx'
import Lottery from './lottery'
import Game from './components/game/game.jsx'
import './App.css';

// 图片



function App() {
  
  const games =[new Lottery('双色球',{maxNum:33,min:6,max:20},{maxNum:15,min:1,max:5},2),new Lottery('大乐透',{maxNum:35,min:5,max:20},{maxNum:12,min:2,max:5},2),new Lottery('单区数字彩',{maxNum:35,min:5,max:20},undefined,2)];
  const [currentIdx, setCurrentIdx] = useState(0);
  
  
  // 切换不同的数字彩
  const switchTab = (index)=>{
    setCurrentIdx(index);
  }
 

//数字彩tab的渲染函数
  const gameItem = games.map((game,index)=>{
    return<Tab switchTab={()=>{switchTab(index)}} currentIdx={currentIdx} index={index} name={game.name} />
  })

  //条件渲染，数字彩 => 切换不同数字彩 会导致 之前进度的丢失。
  const renderGame = games.map((game,index)=>{
      if(currentIdx === index){
        return <Game  game={game} />
      }
      else{
        return null;
      }
  })



  return (
    <div className="App">
      <header class='tab-bar'>{gameItem}</header>
     {renderGame}
    </div>
  );
}

export default App;
