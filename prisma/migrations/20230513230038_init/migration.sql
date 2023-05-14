-- CreateTable
CREATE TABLE "Event" (
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

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "eventid" INTEGER NOT NULL,
    "qrcode" TEXT NOT NULL,
    "seatnumber" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventid_fkey" FOREIGN KEY ("eventid") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
