#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE slcm_product_producta_bayarduluirs' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'slcm_product_producta_bayarduluirs') \gexec" | psql "postgresql://postgres:postgre@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgre@localhost/slcm_product_producta_bayarduluirs"
done

java -cp slcm.product.producta_bayarduluirs --module-path slcm.product.producta_bayarduluirs -m slcm.product.producta_bayarduluirs &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait