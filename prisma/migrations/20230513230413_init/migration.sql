/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Partner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_eventid_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Partner";

-- DropTable
DROP TABLE "Ticket";

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "creationdate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "registrationstartdatetime" TIMESTAMP(3) NOT NULL,
    "registrationenddatetime" TIMESTAMP(3) NOT NULL,
    "eventstartdatetime" TIMESTAMP(3) NOT NULL,
    "eventenddatetime" TIMESTAMP(3) NOT NULL,
    "profile" TEXT NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "eventid" INTEGER NOT NULL,
    "qrcode" TEXT NOT NULL,
    "seatnumber" INTEGER NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "partner_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_eventid_fkey" FOREIGN KEY ("eventid") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
