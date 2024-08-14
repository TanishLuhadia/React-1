import React,{Component,useRef} from 'react';

function AppExample1(){
const aboutMeRef=useRef();
const goToNextDomain=function(){
aboutMeRef.current.updateDomain("Backend Developer");
}

return(
<div>
<h1>Hello Everyone</h1>
<AboutMe domain="Software Developer" motto="Eager to use my coding, problem solving and software development skills to support a dynamic developing team."  ref={aboutMeRef}/>
<button type="button" onClick={goToNextDomain} >Next Domain</button>
</div>
);
}

class AboutMe extends React.Component
{
constructor(props)
{
super(props);
this.state={
"domain":props.domain,
"motto":props.motto
};
}
updateDomain(domain)
{
this.setState({
"domain":domain
});
}
render(){
return(
<b>
{this.state.domain} <br ></ br>
{this.state.motto} <br ></ br>
</b>
);
}
}

export default AppExample1;