class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :show]
    #  Makes it so the authorized method runs first, in this case auto_login
    before_action :authorized, only: [:auto_login]

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update(full_name: params[:user][:full_name], image: params[:user][:image], email: params[:user][:email], username: params[:user][:username], password: params[:user][:password])
        render json: user
    end

    def get_user
        user = self.current_user
        # byebug
        render json: user
    end
    
    
    # REGISTER user instance is created. If valid, payload object is created with
    # user instance’s ID and passed into the encode_token --> POST made to /users
    def create
        user = User.create(user_params)
        if user.valid?
            payload = {user_id: user.id}
            token = encode_token(payload)
            puts token
            render json: {user: user, jwt: token}
        else
            render json: {error: "Invalid username or password"}
        end
    end

    # LOGGING IN --> POST made to /login
    # check for existing user in the params passed, bcrypt compares 
    #the password passed to the password stored to that user instance
    def login
        user = User.find_by(username: params[:username])
        # if both (below) pass, then a token is created by JWT & JSON object is rendered with key value pair, user & token
        if user && user.authenticate(params[:password])
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: user, jwt: token, success: "Welcome back, #{user.username}"}
        else
            render json: {error: "Invalid username or password"}
        end
    end

    # auto_login gets the variable @user from the logged_in_user method in 
    # application_controller, that runs after the authorized method
    def auto_login
        if session_user
            render json: user
        else
            render json: {error: "Not Logged In"}
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
