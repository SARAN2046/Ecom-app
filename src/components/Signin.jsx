import React from 'react'

const Signin = () => {
  return (
    <div class="container mt-5 mb-5 w-50">
        <form class="card p-4" id="sign-in-form">
            <h2 class="text-center">Sign In</h2>
            <div class="mb-3">
                <label for="signin-email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="signin-email" required/>
            </div>
            <div class="mb-3">
                <label for="signin-password" class="form-label">Password</label>
                <input type="password" class="form-control" id="signin-password" required/>
            </div>
            <div className="d-flex">
            <button type="submit" class="btn btn-primary w-100 m-2">Sign In</button>
            </div>
            
            <div class="text-center mt-3">
                <a href="#" class="btn btn-link">Forgot your password?</a>
            </div>
        </form>
    </div>

    
  )
}

export default Signin