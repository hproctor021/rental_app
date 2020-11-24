class Api::V1::AuthController < ApplicationController

    def create
        user = User.find_by(username: params[:user][:username])
        if user && user_authenticate(params[:user][:password])
            render json: {username: user.username, token: JWT.encode{{user_id: user.id},"hush"}}
        else
            render json: {error: "Invalid username or password"}
        end
    end
    
end
