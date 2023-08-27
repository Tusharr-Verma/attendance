import img1 from './images/school.jpg';
import './App.css';
export const Login = (props) => {
    return (
        <>
        <div class="login" >
        <div class="image">
            <img src={img1} alt=""/>
        </div>
        <div class="right">
            <h2 class="login_head">Student login </h2>
            <form action="" id="form">
                <input type="text" id="name" placeholder="Username"/>
                <input type="password" id="password" placeholder="Password"/>
                
                    <input onClick = {props.onFormSwitch} type="submit" class="btn btn-warning" id="submit" value="Submit"/>
            </form>
        </div>
    </div>
        </>
    )        
}