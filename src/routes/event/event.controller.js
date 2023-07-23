const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllEvents = async (req, res) => {
  try {
    const AllEvents = await prisma.event.findMany()
    return res.status(200).json({ upcomingEvents: AllEvents })
  }
  catch (err) {
    console.log(`Error while receiving all events ERROR:${err.message}`)
    return res.status(500).json([])
  }

}
exports.addEvent = async (req, res) => {
  const eventData = req.body;
  try {
    const newEvent = await prisma.event.create({
      data: {
        name: eventData.name,
        description: eventData.description,
        venue: eventData.venue,
        type: eventData.type,
        status: eventData.status,
        registrationstartdatetime: eventData.registrationstartdatetime,
        registrationenddatetime: eventData.registrationenddatetime,
        eventstartdatetime: eventData.eventstartdatetime,
        eventenddatetime: eventData.eventenddatetime,
        profile: eventData.profile
      },
    });
    res.status(201).json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Error ${err.message}` });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await prisma.event.delete({
      where: {
        id: parseInt(req.params.id, 10)
      }
    });

    return res.status(200).json({
      eventId: deletedEvent.id
    })
  }
  catch (err) {
    res.status(500).json(`Error While deleting Event ${err}`)
  }

}

exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await prisma.event.update({
      where: {
        id: parseInt(req.params.id, 10)
      },
      data: {
        name: req.body.name,
        description: req.body.description
      }
    })

    return res.status(200).json({
      updatedEvent: updatedEvent
    })

  }
  catch (err) {
    return res.status(500).json(`Error While updating Event ${err}`)
  }
}