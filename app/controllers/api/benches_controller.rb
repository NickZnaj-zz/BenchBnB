class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render :index
  end

  def new
  end
end
