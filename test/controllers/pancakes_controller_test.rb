require 'test_helper'

class PancakesControllerTest < ActionController::TestCase
  setup do
    @pancake = pancakes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pancakes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pancake" do
    assert_difference('Pancake.count') do
      post :create, pancake: { description: @pancake.description, name: @pancake.name, price: @pancake.price, stock: @pancake.stock }
    end

    assert_redirected_to pancake_path(assigns(:pancake))
  end

  test "should show pancake" do
    get :show, id: @pancake
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pancake
    assert_response :success
  end

  test "should update pancake" do
    patch :update, id: @pancake, pancake: { description: @pancake.description, name: @pancake.name, price: @pancake.price, stock: @pancake.stock }
    assert_redirected_to pancake_path(assigns(:pancake))
  end

  test "should destroy pancake" do
    assert_difference('Pancake.count', -1) do
      delete :destroy, id: @pancake
    end

    assert_redirected_to pancakes_path
  end
end
