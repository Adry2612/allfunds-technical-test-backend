let New = require('../models/New')

let controller = {
    /* Getting all the news from the database. */
    getNews: (req, res) => {
        New.find({}).sort({date: 'desc'}).exec((err, news) => {
            if (err) return res.status(500).send({ message: "Error getting the new"})

            if (!news) return res.status(404).send({ message: "No news available"})

            return res.status(200).send({ news })
        })
    },

    /* Saving the new to the database. */
    saveNew: (req, res) => {
        let params = req.body // Saving the request body in a variable to easily access.

        // Create a New object with the request parameters.
        let newToCreate = new New({
            title:params.title,
            description: params.description,
            date: new Date(),
            content: params.content,
            archivedDate: params.archivedDate
        })

       newToCreate.save((err, newStored) => {
            if (err) return res.status(500).send({ message: "Error saving the new"})

            if (!newStored) return res.status(404).send({ message: "Can't save the new"})

            return res.status(200).send({ newToCreate: newToCreate })
       })
    },

    archiveNew: (req, res) => {
        let newId = req.params.id
        let newToUpdate = req.body

        New.findByIdAndUpdate(newId, {archivedDate: new Date()}, (err, newUpdated) => {
            if (err) return res.status(500).send({ message: "Error updating the new"})

            if (!newUpdated) return res.status(404).send({ message: "Can't update the new"})

            return res.status(200).send({ new: newUpdated })
        })
    },

    /* Removing the new from the database. */
    removeNew: (req, res) => {
        let newId = req.params.id // Obtaining the new id from the request.

        New.findByIdAndRemove(newId, (err, newRemoved) => {
            if (err) return res.status(500).send({ message: "Error removing the new"})

            if (!newRemoved) return res.status(404).send({ message: "Can't remove the new"})

            return res.status(200).send({ new: newRemoved })
        })
    }
}

module.exports = controller