class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.references :occupation, null: false, foreign_key: true
      t.date :birth_date, null: false
      t.date :admission_date, null: false
      t.decimal :salary, null: false

      t.timestamps
    end
  end
end
