import Note from "../model/notes.model.js";

export const createNote = async (req,res)=>{
    try{
        const note = await Note.create(req.body);
        res.status(201).json({
            success:true,
            message:"Note created successfully",
            note
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error creating note",
            error
        })
    }
}

export const getAllNotes = async (req,res)=>{
    const notes = await Note.find();
    res.json(notes);
}

export const getNoteById = async(req,res)=>{
    try{
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).json({
                success:false,
                message:"Note not found"
            })
        }

        console.log(note);
        res.json(note);
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error fetching note",
            error
        })
    }
}

export const updateNote = async(req,res)=>{
    try{
        const note = await Note.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!note){
            return res.status(404).json({
                success:false,
                message:"Note not found"
            })
        }
        res.json(note);
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error updating note",
            error
        })
    }
}

export const deleteNote = async(req,res)=>{
    try{
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note){
            return res.status(404).json({
                success:false,
                message:"Note not found"
            })
        }
        res.json({
            success:true,
            message:"Note deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error deleting note",
            error
        })
    }
}