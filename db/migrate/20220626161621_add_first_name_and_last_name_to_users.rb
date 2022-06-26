class AddFirstNameAndLastNameToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string, index: true
    add_column :users, :last_name, :string, index: true
  end
end
