class UsersController < ApplicationController

    #  Makes it so the authorized method runs first, in this case auto_login
    before_action :authorized, only: [:auto_login]

    # REGISTER user instance is created. If valid, payload object is created with
    # user instance’s ID and passed into the encode_token --> POST made to /users
    def create
        @user = User.create(user_params)
        if @user.valid?
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
        else
            render json: {error: "Invalid username or password"}
        end
    end

    # LOGGING IN --> POST made to /login
    # check for existing user in the params passed, bcrypt compares 
    #the password passed to the password stored to that user instance
    def login
        @user = User.find_by(username: params[:username])
        # if both vv pass, then a token is created by JWT & JSON object is rendered with key value pair, user & token
        if @user && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
        else
            render json: {error: "Invalid username or password"}
        end
    end

    # auto_login gets the variable @user from the logged_in_user method in 
    # application_controller, that runs after the authorized method
    def auto_login
        render json: @user
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
