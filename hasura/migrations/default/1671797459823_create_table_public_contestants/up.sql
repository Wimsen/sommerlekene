CREATE TABLE "public"."contestants" ("contestant_id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, PRIMARY KEY ("contestant_id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
