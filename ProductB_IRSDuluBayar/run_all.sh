#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE slcm_product_productb_irsdulubayar' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'slcm_product_productb_irsdulubayar') \gexec" | psql "postgresql://postgres:postgre@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgre@localhost/slcm_product_productb_irsdulubayar"
done

java -cp slcm.product.productb_irsdulubayar --module-path slcm.product.productb_irsdulubayar -m slcm.product.productb_irsdulubayar &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait