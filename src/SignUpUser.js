import React from 'react';
import { useForm } from 'react-hook-form';

function SignUpUser() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert(JSON.stringify(data, null, 2));
    };

    const password = watch("password", "");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>firstName</label>
                <input {...register("firstName", { required: true })} />
                {errors.firstName && <span>Need First Name.</span>}
            </div>
            <div>
                <label>lastName</label>
                <input {...register("lastName", { required: true })} />
                {errors.lastName && <span>Need Last Name.</span>}
            </div>
            <div>
                <label>userName</label>
                <input {...register("userName", { required: true })} />
                {errors.userName && <span>Need User Name.</span>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Need a correct email address.</span>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" {...register("password", { required: true })} />
                {errors.password && <span>Need a pass word.</span>}
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" {...register("confirmPassword", {
                    required: true,
                    validate: value => value === password || "Password is incorrect."
                })} />
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    );
}

export default SignUpUser;
