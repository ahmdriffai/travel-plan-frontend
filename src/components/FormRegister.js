import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function FormRegister(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onRegisterHandler = (data) => {
    // eslint-disable-next-line react/destructuring-assignment
    props.register({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onRegisterHandler)}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register('name', { required: 'this is requred' })} placeholder="name" className="input input-bordered" />
          <p className="text-xs text-red-600 mt-2 ml-1">{errors.name?.message}</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register('email', { required: 'this is requred' })} placeholder="email" className="input input-bordered" />
          <p className="text-xs text-red-600 mt-2 ml-1">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register('password', { required: 'this is requred', min: 3 })} placeholder="password" className="input input-bordered" />
          <p className="text-xs text-red-600 mt-2 ml-1">{errors.password?.message}</p>

          <label className="mt-5 ml-2 label-text-alt text-black">
            Sudah Punya Akun ?
            {' '}
            <Link to="/login" className="label-text-alt link link-hover text-primary">Login</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  );
}
