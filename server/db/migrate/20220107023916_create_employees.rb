class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.references :occupation, null: false, foreign_key: true
      t.date :birth_date
      t.date :admission_date
      t.decimal :salary

      t.timestamps
    end
  end
end
