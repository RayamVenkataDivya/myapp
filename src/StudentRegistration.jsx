import {useFormik}  from 'formik';
import * as Yup from "yup";

function StudentRegistration(){
    var studentForm=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("please fill the firstname field"),
            lastname:Yup.string().required("please fill the lastname field"),
            age:Yup.string().required("please fill the age field")

        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    console.log("clear")
    console.log(studentForm)
    return(
        <>
        <h1>StudentRegistration</h1>
        <form onSubmit={studentForm.handleSubmit} className='container form-group'>
            <div class="form-floating mb-3">
                <input type="text" className={studentForm.touched.firstname && studentForm.errors.firstname?"form-control is-invalid":"form-control"} name="firstname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} id="floatingInput" placeholder="grhg"/>
                <label for="floatingInput">Firstname</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" className={studentForm.touched.lastname && studentForm.errors.firstname?"form-control is-invalid":"form-control"} name="lastname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} id="floatingInput" placeholder="grhg"/>
                <label for="floatingInput">Lastname</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" className={studentForm.touched.age && studentForm.errors.firstname?"form-control is-invalid":"form-control"} name="age" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} id="floatingInput" placeholder="grhg"/>
                <label for="floatingInput">Age</label>
            </div>
            {/* <input type="text" name="lastname" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/><br/>
            <input type="text" name="age" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} /><br/> */}
            <button>Register</button>
        </form>
        </>

    )
}
export default StudentRegistration;
