import { useState } from "react"
import './counter.css'

function Counter()
{
    var [count,setCount] = useState(0)

    function increament()
    {
        var newCount = count+1
        setCount(newCount)
    }
    function decreament()
    {
        var newCount = count-1
        setCount(newCount)
    }

    return(
        <div>
            <h1>Counter</h1>
            <table>
                <tr>
                    <td><button onClick={decreament}><span>-</span></button></td>
                    <td> <button onClick={increament}><span>+</span></button></td>
                </tr>
                <tr>
                    <td colspan="2"><h1>{count}</h1></td>
                </tr>
            </table>
        </div>
    )
    
}
export default Counter