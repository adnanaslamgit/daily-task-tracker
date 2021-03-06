import { useState } from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert("Please Add Task");
            return
        }

        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <div>
            <form className="form" onSubmit= {onSubmit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input type="text" value={text} placeholder="Add Task" onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Day &amp; Time</label>
                    <input type="text" value={day} placeholder="Add Day &amp; Time" onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input type="checkbox" 
                    value={reminder}
                    checked = { reminder}
                    onChange={(e) => setReminder(e.target.checked)} />
                </div>
                <input type="submit" className="btn btn-block" value="Save Task" />
            </form>
        </div>
    )
}

export default AddTask
