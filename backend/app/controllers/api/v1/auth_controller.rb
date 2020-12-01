class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            render json: {username: user.username, token: JWT.encode({user_id: user.id},"hush")}
        else
            render json: {error: "Invalid username or password"}
        end
    end
    
    # def encode_token(payload)
    #     JWT.encode(payload, 'hush')
    # end

    # def auth_header
    #     request.headers['Authoritation']
    # end

    # def decoded_token
    #     if auth_header
    #         token = auth_header.split('')[1]
    #         begin
    #             JWT.decode(token, 'hush', algorithm: 'HS256')
    #         rescue JWT::DecodeError
    #             []
    #         end
    #     end
    # end

    # def session_user
    #     decoded_hash = decoded_token
    #     if !decoded_hash.empty?
    #         puts decoded_hash.class
    #         user_id = decoded_hash[0]['user_id']
    #         user = User.find_by(id: user_id)
    #     else
    #         nil
    #     end
    # end

    # def logged_in?
    #     !!session_user
    # end

    # def require_login
    #     render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
    # end
    # private

    # def user_login_params
    #     params.require(:user).permit(:username, :password)
    # end

end
