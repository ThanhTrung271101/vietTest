package com.myrnmodule

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    // add to CalendarModule.kt
    override fun getName() = "CalendarModules"


    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("CalendarModules", "Create event called with name: $name and location: $location")
    }

}