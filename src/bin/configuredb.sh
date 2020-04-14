#!/bin/bash
dropdb -U postgres familydb
createdb -U postgres familydb
psql -U postgres familydb < ./bin/sql/family.sql
echo "database configured"