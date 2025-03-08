import React from 'react';
import {supabase} from "./supabase/index.js"

const RemontPage = () => {
    let { data: remont, error } = await supabase
        .from('remont')
        .select('*')
    return (
        <div>
            
        </div>
    );
};

export default RemontPage;