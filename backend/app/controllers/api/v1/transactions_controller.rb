class Api::V1::TransactionsController < ApplicationController

    def index
        @transactions = Transaction.all
        render json: @transactions
    end

    def create
        @transaction = Transaction.create(transaction_params)
        render json: @transaction
    end

    private

    def transaction_params
        params.require(:transaction).permit(:payment_info)
    end

end
