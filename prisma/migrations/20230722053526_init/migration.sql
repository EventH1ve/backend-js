-- AlterTable
ALTER TABLE "event" ALTER COLUMN "registrationstartdatetime" DROP DEFAULT,
ALTER COLUMN "registrationenddatetime" DROP DEFAULT,
ALTER COLUMN "eventstartdatetime" DROP DEFAULT,
ALTER COLUMN "eventenddatetime" DROP DEFAULT;
