# Migration `20200725230607`

This migration has been generated by Xiaoru Li at 7/25/2020, 11:06:07 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
"userId" text  NOT NULL ,
"name" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.userId" ON "public"."User"("userId")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200725230607
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+
+  // id used by Auth0 in format `{identity provider id}|{unique id with provider}`
+  userId String @unique
+  name   String
+}
```


