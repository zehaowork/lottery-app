import './tab.css';
// tab部分
function Tab(props){
    return <div onClick={()=>{props.switchTab();}} class='tab-item'>
        <p>{props.name}</p>
        <div className={props.currentIdx === props.index?'active':''} ></div>
    </div>
   
}
export default Tab;