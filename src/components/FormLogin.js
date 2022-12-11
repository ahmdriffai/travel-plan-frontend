import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function FormLogin(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onLoginHandler = (data) => {
    // eslint-disable-next-line react/destructuring-assignment
    props.login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onLoginHandler)}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" {...register('email', { required: 'this is requred' })} placeholder="email" className="input input-bordered" />
          <p className="text-xs text-red-600 mt-2 ml-1">{errors.name?.message}</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register('password', { required: 'this is requred' })} placeholder="password" className="input input-bordered" />
          <p className="text-xs text-red-600 mt-2 ml-1">{errors.name?.message}</p>
        </div>
        <label className="mt-5 ml-2 label-text-alt text-black">
          Belum Punya Akun ?
          {' '}
          <Link to="/register" className="label-text-alt link link-hover text-primary">Daftar</Link>
        </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  );
}
